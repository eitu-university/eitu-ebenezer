'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import {
  getNationRegistrationFormSchema,
  type NationRegistrationFormSchema,
} from '@/zod/schemas';
import {
  FiUser,
  FiMail,
  FiCalendar,
  FiPhone,
  FiMapPin,
  FiHome,
  FiFlag,
  FiHash,
  FiSend,
} from 'react-icons/fi';
import { toast } from 'sonner';
import type { NationsData } from '@/types';
import Button from '@/components/ui/Button';
import { Field, pillClasses } from '@/components/ui/Input';

interface NationRegistrationFormProps {
  nation: NationsData;
}

export default function NationRegistrationForm({
  nation,
}: NationRegistrationFormProps) {
  const t = useTranslations('Nations.registrationForm');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nationRegistrationFormSchema = useMemo(
    () =>
      getNationRegistrationFormSchema({
        firstNameMin: t('errors.firstNameMin'),
        firstNameMax: t('errors.firstNameMax'),
        lastNameMin: t('errors.lastNameMin'),
        lastNameMax: t('errors.lastNameMax'),
        birthDateRequired: t('errors.birthDateRequired'),
        birthDateInvalid: t('errors.birthDateInvalid'),
        birthDateFuture: t('errors.birthDateFuture'),
        birthDateMinAge: t('errors.birthDateMinAge'),
        phoneInvalid: t('errors.phoneInvalid'),
        emailInvalid: t('errors.emailInvalid'),
        emailMax: t('errors.emailMax'),
        addressMin: t('errors.addressMin'),
        addressMax: t('errors.addressMax'),
        cityMin: t('errors.cityMin'),
        cityMax: t('errors.cityMax'),
        stateMin: t('errors.stateMin'),
        stateMax: t('errors.stateMax'),
        postalCodeInvalid: t('errors.postalCodeInvalid'),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NationRegistrationFormSchema>({
    resolver: zodResolver(nationRegistrationFormSchema),
    defaultValues: { countryCode: nation.code },
  });

  const onSubmit = async (data: NationRegistrationFormSchema) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/nations-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(t('toastSuccessTitle'), {
          description: t('toastSuccessMessage'),
          duration: 5000,
        });
        reset({
          countryCode: nation.code,
          firstName: '',
          lastName: '',
          birthDate: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          state: '',
          postalCode: '',
          website: '',
        });
      } else {
        toast.error(t('toastErrorTitle'), {
          description: t('toastErrorGeneric'),
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error(t('toastErrorTitle'), {
        description: t('toastErrorGeneric'),
        duration: 5000,
      });
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`rounded-card border border-taupe bg-paper p-8 shadow-float dark:border-[#3f3f46] dark:bg-[#27272a] ${isSubmitting ? 'pointer-events-none opacity-50' : 'opacity-100'}`}
    >
      <div className="mb-8 text-center">
        <h3 className="font-display mb-2 text-2xl font-normal text-ink dark:text-paper">
          {t('title')}
        </h3>
        <p className="text-graphite dark:text-[#a1a1aa]">{t('subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot: hidden from real users, bots tend to fill every field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...register('website')}
          />
        </div>

        <input type="hidden" {...register('countryCode')} />

        {/* Nombre y apellido */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            label={t('firstNameLabel')}
            htmlFor="firstName"
            icon={<FiUser className="h-5 w-5" />}
            error={errors.firstName?.message}
          >
            <input
              {...register('firstName')}
              type="text"
              id="firstName"
              maxLength={20}
              autoComplete="off"
              className={pillClasses()}
              placeholder={t('firstNamePlaceholder')}
            />
          </Field>

          <Field
            label={t('lastNameLabel')}
            htmlFor="lastName"
            icon={<FiUser className="h-5 w-5" />}
            error={errors.lastName?.message}
          >
            <input
              {...register('lastName')}
              type="text"
              id="lastName"
              maxLength={20}
              autoComplete="off"
              className={pillClasses()}
              placeholder={t('lastNamePlaceholder')}
            />
          </Field>
        </div>

        {/* Fecha de nacimiento y teléfono */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            label={t('birthDateLabel')}
            htmlFor="birthDate"
            icon={<FiCalendar className="h-5 w-5" />}
            error={errors.birthDate?.message}
          >
            <input
              {...register('birthDate')}
              type="date"
              id="birthDate"
              className={pillClasses()}
            />
          </Field>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-charcoal dark:text-[#a1a1aa]"
            >
              {t('phoneLabel')}
            </label>
            <div className="flex">
              <span className="rounded-l-input inline-flex items-center gap-1 border border-r-0 border-ash bg-paper px-4 text-charcoal dark:border-[#52525b] dark:bg-[#27272a] dark:text-[#a1a1aa]">
                <FiPhone className="h-4 w-4" />+{nation.dialCode}
              </span>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                maxLength={12}
                autoComplete="off"
                className="rounded-r-input block w-full border border-ash bg-paper px-3 py-3 text-charcoal outline-none transition-colors duration-200 placeholder-graphite focus:border-terracotta focus:shadow-[0_0_0_3px_rgba(255,90,0,0.2)] dark:border-[#52525b] dark:bg-[#27272a] dark:text-[#f4f4f5] dark:placeholder-[#a1a1aa]"
                placeholder={t('phonePlaceholder')}
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <Field
          label={t('emailLabel')}
          htmlFor="email"
          icon={<FiMail className="h-5 w-5" />}
          error={errors.email?.message}
        >
          <input
            {...register('email')}
            type="email"
            id="email"
            maxLength={100}
            autoComplete="off"
            className={pillClasses()}
            placeholder={t('emailPlaceholder')}
          />
        </Field>

        {/* Dirección */}
        <Field
          label={t('addressLabel')}
          htmlFor="address"
          icon={<FiMapPin className="h-5 w-5" />}
          error={errors.address?.message}
        >
          <input
            {...register('address')}
            type="text"
            id="address"
            maxLength={100}
            autoComplete="off"
            className={pillClasses()}
            placeholder={t('addressPlaceholder')}
          />
        </Field>

        {/* Ciudad, estado/provincia y código postal */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Field
            label={t('cityLabel')}
            htmlFor="city"
            icon={<FiHome className="h-5 w-5" />}
            error={errors.city?.message}
          >
            <input
              {...register('city')}
              type="text"
              id="city"
              maxLength={50}
              autoComplete="off"
              className={pillClasses()}
              placeholder={t('cityPlaceholder')}
            />
          </Field>

          <Field
            label={t('stateLabel')}
            htmlFor="state"
            icon={<FiFlag className="h-5 w-5" />}
            error={errors.state?.message}
          >
            <input
              {...register('state')}
              type="text"
              id="state"
              maxLength={50}
              autoComplete="off"
              className={pillClasses()}
              placeholder={t('statePlaceholder')}
            />
          </Field>

          <Field
            label={t('postalCodeLabel')}
            htmlFor="postalCode"
            icon={<FiHash className="h-5 w-5" />}
            error={errors.postalCode?.message}
          >
            <input
              {...register('postalCode')}
              type="text"
              id="postalCode"
              maxLength={12}
              autoComplete="off"
              className={pillClasses()}
              placeholder={t('postalCodePlaceholder')}
            />
          </Field>
        </div>

        {/* Submit */}
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-parchment border-t-transparent" />
              <span>{t('submitting')}</span>
            </>
          ) : (
            <>
              <FiSend className="h-5 w-5" />
              <span>{t('submit')}</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
