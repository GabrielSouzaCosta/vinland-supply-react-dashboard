import React from 'react'
import Select, { Props as SelectProps } from 'react-select'
import { useStateContext } from '@/context/ContextProvider';
import useGetThemeColors from '@/hooks/useGetThemeColors';

const SelectInput = ({
  options,
  ...props
} : SelectProps) => {
  const { theme } = useStateContext();
  const colors = useGetThemeColors();

  return (
    <Select
      components={{
        IndicatorSeparator: () => null
      }}
      options={options}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: state.isFocused ? `2px solid ${colors.primary_medium}` : `2px solid ${colors.gray_light}77`,
          borderRadius: '8px',
          boxShadow: 'none',
          backgroundColor: state.isFocused ? colors.white_medium_light : colors.gray_extra_light,
          '&:hover': {
            borderColor: colors.primary_medium,
            backgroundColor: colors.white_medium_light,
          }
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: colors.black+'cc',
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: colors.white_medium_light,
        }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          color: state.isFocused ? `${colors.primary_medium}` : `${colors.gray_light}77`,
          '&:hover': {
            color: colors.primary_medium
          }
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused ? colors.primary_medium : colors.white_medium_light,
          color: state.isFocused ? colors.gray_extra_light : colors.black_extra_light,
          fontWeight: '600',
          '&:active': {
            backgroundColor: colors.black_extra_light,
          }
        })
      }}
      { ...props }
    />
  )
}

export default SelectInput