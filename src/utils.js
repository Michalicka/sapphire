
export const fieldProps = (formData, requestErrors) => (name, type) => ({
  name,
  label: `${name.charAt(0).toUpperCase()}${name.slice(1, name.length).replace(/_/g, ' ')}`,
  value: formData.values[name],
  type,
  onChange: formData.handleChange,
  onBlur: formData.handleBlur,
  error: !!requestErrors[name] || (!!formData.errors[name] && !!formData.touched[name]),
  helperText: (requestErrors[name] || (formData.touched[name] && formData.errors[name])) || '',
  'data-test-id': `field-${name}`
})
