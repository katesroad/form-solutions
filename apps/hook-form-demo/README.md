# React Hook Form POC

## Dependencies

- V7 relies on React v18

## Official FAQs

https://react-hook-form.com/faqs

## FAQ

- How can I validate field on blur;

  - a: customized by `mode` field when using `useForm`.
  - r: [react-hook-form-validation-not-working-when-using-onblur-mode](https://stackoverflow.com/questions/66758855/react-hook-form-validation-not-working-when-using-onblur-mode)

- Add form data.

  - a: customized by `defaultValues` field when using `useForm`
  - r: https://react-hook-form.com/api/useform

- Trigger usage

  - example: On facebook register form, if user intends to leave without filling something via clicking gray overlay, form field error shows up programatically

- **How to validate data remotely**

- Array Field example: via [useArrayField](https://react-hook-form.com/api/usefieldarray)

- Mock loading form dafault data example: [react-hook-form-reset-form-with-default-values-and-clear-error](https://jasonwatmore.com/post/2021/09/23/react-hook-form-reset-form-with-default-values-and-clear-errors#:~:text=The%20solution%20is%20to%20use,%3A%20'Bob'%20%7D)

- Conditional example: https://codesandbox.io/embed/react-hook-form-conditional-fields-9iw0k
