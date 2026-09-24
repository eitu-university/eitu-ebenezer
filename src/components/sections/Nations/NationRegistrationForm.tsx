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

interface NationRegistrationFormProps {
  nation: NationsData;
}

const inputClasses =
  'outline-none block w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500';

const labelClasses =
  'mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300';

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
        reset({ countryCode: nation.code });
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
      className={`rounded-2xl border border-gray-100 bg-white p-8 shadow-lg dark:border-gray-600 dark:bg-gray-700 ${isSubmitting ? 'pointer-events-none opacity-50' : 'opacity-100'}`}
    >
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-200">
          {t('title')}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
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
          <div>
            <label htmlFor="firstName" className={labelClasses}>
              {t('firstNameLabel')}
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FiUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('firstName')}
                type="text"
                id="firstName"
                maxLength={20}
                className={inputClasses}
                placeholder={t('firstNamePlaceholder')}
              />
            </div>
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className={labelClasses}>
              {t('lastNameLabel')}
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FiUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('lastName')}
                type="text"
                id="lastName"
                maxLength={20}
                className={inputClasses}
                placeholder={t('lastNamePlaceholder')}
              />
            </div>
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Fecha de nacimiento y teléfono */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="birthDate" className={labelClasses}>
              {t('birthDateLabel')}
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FiCalendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('birthDate')}
                type="date"
                id="birthDate"
                className={inputClasses}
              />
            </div>
            {errors.birthDate && (
              <p className="mt-1 text-sm text-red-600">
                {errors.birthDate.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={labelClasses}>
              {t('phoneLabel')}
            </label>
            <div className="flex">
              <span className="inline-flex items-center gap-1 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
                <FiPhone className="h-4 w-4" />+{nation.dialCode}
              </span>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                maxLength={12}
                className="outline-none block w-full rounded-r-lg border border-gray-300 bg-white py-3 px-3 text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                placeholder={t('phonePlaceholder')}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            {t('emailLabel')}
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FiMail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              {...register('email')}
              type="email"
              id="email"
              maxLength={100}
              className={inputClasses}
              placeholder={t('emailPlaceholder')}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Dirección */}
        <div>
          <label htmlFor="address" className={labelClasses}>
            {t('addressLabel')}
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FiMapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              {...register('address')}
              type="text"
              id="address"
              maxLength={100}
              className={inputClasses}
              placeholder={t('addressPlaceholder')}
            />
          </div>
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Ciudad, estado/provincia y código postal */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <label htmlFor="city" className={labelClasses}>
              {t('cityLabel')}
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FiHome className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('city')}
                type="text"
                id="city"
                maxLength={50}
                className={inputClasses}
                placeholder={t('cityPlaceholder')}
              />
            </div>
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">
                {errors.city.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="state" className={labelClasses}>
              {t('stateLabel')}
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FiFlag className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('state')}
                type="text"
                id="state"
                maxLength={50}
                className={inputClasses}
                placeholder={t('statePlaceholder')}
              />
            </div>
            {errors.state && (
              <p className="mt-1 text-sm text-red-600">
                {errors.state.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="postalCode" className={labelClasses}>
              {t('postalCodeLabel')}
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FiHash className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('postalCode')}
                type="text"
                id="postalCode"
                maxLength={12}
                className={inputClasses}
                placeholder={t('postalCodePlaceholder')}
              />
            </div>
            {errors.postalCode && (
              <p className="mt-1 text-sm text-red-600">
                {errors.postalCode.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg disabled:from-blue-400 disabled:to-blue-400"
        >
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>{t('submitting')}</span>
            </>
          ) : (
            <>
              <FiSend className="h-5 w-5" />
              <span>{t('submit')}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
