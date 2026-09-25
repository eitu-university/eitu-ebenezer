'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import {
  getContactFormSchema,
  ministryOptions,
  type ContactFormSchema,
} from '@/zod/schemas';
import { FiSend, FiUser, FiMail, FiUsers, FiMessageSquare } from 'react-icons/fi';
import { toast } from 'sonner';
import { contactInfo } from '@/data';
import Button from '@/components/ui/Button';
import { Field, pillClasses, textareaClasses } from '@/components/ui/Input';

export default function ContactForm() {
  const tContact = useTranslations('Contact');
  const t = useTranslations('Contact.form');
  const tMinistries = useTranslations('Ministries.items');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactFormSchema = useMemo(
    () =>
      getContactFormSchema({
        nameMin: t('errors.nameMin'),
        nameMax: t('errors.nameMax'),
        emailInvalid: t('errors.emailInvalid'),
        emailMax: t('errors.emailMax'),
        ministryRequired: t('errors.ministryRequired'),
        messageMin: t('errors.messageMin'),
        messageMax: t('errors.messageMax'),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const showToast = (
    msg: string,
    toastType: 'success' | 'error' | 'info' = 'success'
  ) => {
    if (toastType === 'error')
      toast.error(t('toastErrorTitle'), {
        description: msg,
        duration: 5000,
      });
    else if (toastType === 'info') {
      toast.info(t('toastErrorTitle'), {
        description: msg,
        duration: 5000,
      });
    }
    toast.success(t('toastSuccessTitle'), {
      description: msg,
      duration: 5000,
    });
  };

  const onSubmit = async (data: ContactFormSchema) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        showToast(t('toastSuccessMessage'));
        reset();
      } else {
        const errorData = await response.json();
        console.log(`Error: ${errorData.error}`);
        showToast(errorData.error, 'error');
      }
      reset();
    } catch (error) {
      toast.error(t('toastErrorGeneric'));
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
        {/* Nombre */}
        <Field
          label={t('nameLabel')}
          htmlFor="name"
          icon={<FiUser className="h-5 w-5" />}
          error={errors.name?.message}
        >
          <input
            {...register('name')}
            type="text"
            id="name"
            maxLength={20}
            className={pillClasses()}
            placeholder={t('namePlaceholder')}
          />
        </Field>

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
            className={pillClasses()}
            placeholder={t('emailPlaceholder')}
          />
        </Field>

        {/* Capellanía */}
        <Field
          label={t('ministryLabel')}
          htmlFor="ministry"
          icon={<FiUsers className="h-5 w-5" />}
          error={errors.ministry?.message}
        >
          <select
            {...register('ministry')}
            id="ministry"
            defaultValue=""
            className={pillClasses(true, 'appearance-none')}
          >
            <option value="" disabled>
              {t('ministryPlaceholder')}
            </option>
            {ministryOptions.map((option) => (
              <option key={option} value={option}>
                {tMinistries(`${option}.title`)}
              </option>
            ))}
          </select>
        </Field>

        {/* Mensaje */}
        <Field
          label={t('messageLabel')}
          htmlFor="message"
          icon={<FiMessageSquare className="h-5 w-5" />}
          iconAlign="top"
          error={errors.message?.message}
        >
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            maxLength={500}
            className={textareaClasses()}
            placeholder={t('messagePlaceholder')}
          />
        </Field>

        {/* Submit Button */}
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

      {/* Información de contacto adicional */}
      <div className="mt-8 border-t border-taupe pt-8 dark:border-[#3f3f46]">
        <div className="grid gap-6 text-sm text-graphite dark:text-[#a1a1aa] sm:grid-cols-2">
          <div>
            <h4 className="mb-2 font-semibold text-ink dark:text-paper">
              {tContact('info.hoursLabel')}
            </h4>
            <p>{tContact('info.hoursSunday')}</p>
            <p>{tContact('info.hoursWednesday')}</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-ink dark:text-paper">
              {t('additionalInfoTitle')}
            </h4>
            <a href={contactInfo.emailLink} className="block hover:text-terracotta">
              {t('emailPrefix')}: {contactInfo.email}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={contactInfo.whatsappLink}
              className="block hover:text-terracotta"
            >
              {t('phonePrefix')}: {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
