import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Phone, MapPin } from 'lucide-react';

const AppointmentForm: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const { toast } = useToast();

  // Form schema with validation
  const formSchema = z.object({
    name: z.string().min(2, { message: t('form.validation.nameRequired') }),
    phone: z.string().min(8, { message: t('form.validation.phoneRequired') }),
    email: z.string().email({ message: t('form.validation.emailValid') }),
    date: z.string().min(1, { message: t('form.validation.dateRequired') }),
    department: z.string().min(1, { message: t('form.validation.departmentRequired') }),
    time: z.string().min(1, { message: t('form.validation.timeRequired') }),
    reason: z.string().min(10, { message: t('form.validation.reasonRequired') }),
  });

  // Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      date: '',
      department: '',
      time: '',
      reason: '',
    },
  });

  // API mutation for form submission
  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return apiRequest('POST', '/api/appointments', values);
    },
    onSuccess: () => {
      toast({
        title: t('form.success.title'),
        description: t('form.success.message'),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
        title: t('form.error.title'),
        description: error.message || t('form.error.message'),
      });
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <section id="appointment" className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className={`lg:w-1/2 ${isRtl ? 'lg:pl-0 lg:pr-12' : 'lg:pr-12 lg:pl-0'} mb-12 lg:mb-0`}>
            <h2 
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
              }`}
            >
              {t('appointment.title')}
            </h2>
            <p 
              className={`text-gray-600 mb-6 ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
              }`}
            >
              {t('appointment.subtitle')}
            </p>
            
            {/* Contact Info Cards */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className={`flex items-center mb-4 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                <div className={`text-primary text-2xl ${isRtl ? 'ml-4' : 'mr-4'}`}>
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 
                    className={`font-bold text-gray-900 ${
                      isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
                    }`}
                  >
                    {t('appointment.callUs')}
                  </h3>
                  <p className="text-primary">{t('contact.phone')}</p>
                </div>
              </div>
              <p 
                className={`text-gray-600 ${
                  isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
                }`}
              >
                {t('appointment.callInfo')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className={`flex items-center mb-4 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                <div className={`text-primary text-2xl ${isRtl ? 'ml-4' : 'mr-4'}`}>
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 
                    className={`font-bold text-gray-900 ${
                      isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
                    }`}
                  >
                    {t('appointment.visitUs')}
                  </h3>
                  <p 
                    className={`text-primary ${
                      isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
                    }`}
                  >
                    {t('contact.address')}
                  </p>
                </div>
              </div>
              <p 
                className={`text-gray-600 ${
                  isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
                }`}
              >
                {t('appointment.locationInfo')}
              </p>
            </div>
          </div>
          
          {/* Appointment Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 
                className={`text-2xl font-bold text-gray-900 mb-6 ${
                  isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
                }`}
              >
                {t('appointment.formTitle')}
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}>
                            {t('form.name')}
                          </FormLabel>
                          <FormControl>
                            <Input placeholder={t('form.namePlaceholder')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}>
                            {t('form.phone')}
                          </FormLabel>
                          <FormControl>
                            <Input placeholder={t('form.phonePlaceholder')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}>
                            {t('form.email')}
                          </FormLabel>
                          <FormControl>
                            <Input placeholder={t('form.emailPlaceholder')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}>
                            {t('form.date')}
                          </FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}>
                            {t('form.department')}
                          </FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('form.departmentPlaceholder')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="cardiology">{t('services.cardiology.title')}</SelectItem>
                              <SelectItem value="neurology">{t('services.neurology.title')}</SelectItem>
                              <SelectItem value="orthopedics">{t('services.orthopedics.title')}</SelectItem>
                              <SelectItem value="pediatrics">{t('services.pediatrics.title')}</SelectItem>
                              <SelectItem value="ophthalmology">{t('services.ophthalmology.title')}</SelectItem>
                              <SelectItem value="internal">{t('services.internal.title')}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}>
                            {t('form.time')}
                          </FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('form.timePlaceholder')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">{t('form.timeOptions.morning')}</SelectItem>
                              <SelectItem value="afternoon">{t('form.timeOptions.afternoon')}</SelectItem>
                              <SelectItem value="evening">{t('form.timeOptions.evening')}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}>
                          {t('form.reason')}
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('form.reasonPlaceholder')} 
                            className="resize-none h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className={`w-full bg-primary hover:bg-primary/90 py-3 btn-primary ${
                      isRtl ? 'font-arabic' : 'font-heading-en'
                    }`}
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? t('form.submitting') : t('form.submit')}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
