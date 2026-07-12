'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { getContactFormSchema, type ContactFormSchema } from '@/zod/schemas';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { toast } from 'sonner';
import { contactInfo } from '@/data';

export default function ContactForm() {
  const tContact = useTranslations('Contact');
  const t = useTranslations('Contact.form');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactFormSchema = useMemo(
    () =>
      getContactFormSchema({
        nameMin: t('errors.nameMin'),
        emailInvalid: t('errors.emailInvalid'),
        messageMin: t('errors.messageMin'),
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
      className={`rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-700 ${isSubmitting ? 'pointer-events-none opacity-50' : 'opacity-100'}`}
    >
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-200">
          {t('title')}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nombre */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t('nameLabel')}
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FiUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder={t('namePlaceholder')}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
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
              className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder={t('emailPlaceholder')}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t('messageLabel')}
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute left-3 top-3 flex items-start">
              <FiMessageSquare className="mt-0.5 h-5 w-5 text-gray-400" />
            </div>
            <textarea
              {...register('message')}
              id="message"
              rows={5}
              className="block w-full resize-none rounded-lg border border-gray-300 py-3 pl-10 pr-3 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder={t('messagePlaceholder')}
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 disabled:bg-blue-400"
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

      {/* Información de contacto adicional */}
      <div className="mt-8 border-t border-gray-200 pt-8">
        <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2">
          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-300">
              {tContact('info.hoursLabel')}
            </h4>
            <p className="dark:text-gray-300">{tContact('info.hoursSunday')}</p>
            <p className="dark:text-gray-300">
              {tContact('info.hoursWednesday')}
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-300">
              {t('additionalInfoTitle')}
            </h4>
            <a
              href={contactInfo.emailLink}
              className="block dark:text-gray-300"
            >
              {t('emailPrefix')}: {contactInfo.email}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={contactInfo.whatsappLink}
              className="block dark:text-gray-300"
            >
              {t('phonePrefix')}: {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
