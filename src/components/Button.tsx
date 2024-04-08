import { Box, Center, Input, Button as But, useToast } from "@chakra-ui/react"


export const Button = ({onClick, colorScheme, size, ariaLabel, children} : { onClick: () => void, colorScheme: string, size: string, ariaLabel: string, children: any}) => {

  return (
    <> 
      <But onClick={onClick} colorScheme={colorScheme} size={size} aria-label={ariaLabel}>{children}</But>
    </>
  )
}