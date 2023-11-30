import React, { FC, useState } from 'react'
import { ReactComponent as authDropDownArrow } from 'Images/svg/authDropDownArrow.svg'
import {
    Select,
    MenuItem,
    SelectChangeEvent,
    FormControl,
    InputLabel,
    Typography,
} from '@mui/material'
import { Box, useTheme } from '@mui/system'
import { FormDataType } from './CardTransferForm'
import { CardDataTypes } from 'Components/MainMenu/constants'
import { CardHeaderComponent } from './CardHeaderComponent'
import {
    generateCardInformation,
    generateCardBalanceInformation,
} from 'Utils/helper'

type CardDropdownProps = {
    name: string
    values: FormDataType
    cards: CardDataTypes[]
    serverError: string
    setFieldValue: (
        field: string,
        value: string,
        shouldValidate?: boolean
    ) => void
    getCardInformation: (
        currency: string,
        balance: number,
        cardNumber: string
    ) => void
}

export const CardDropdownComponent: FC<CardDropdownProps> = ({
    name,
    values,
    cards,
    serverError,
    setFieldValue,
    getCardInformation,
}) => {
    const [selectedValue, setSelectedValue] = useState<CardDataTypes | null>(
        null
    )
    const theme = useTheme()

    const handleChange = (event: SelectChangeEvent) => {
        setFieldValue(name, event.target.value)
        const selectedCard = cards.find(
            (card) => card.id === event.target.value
        )
        if (selectedCard) {
            setSelectedValue(selectedCard)
            getCardInformation(
                selectedCard.currency,
                selectedCard.balance,
                selectedCard.cardNumber
            )
        }
    }

    return (
        <FormControl>
            <CardHeaderComponent cardTemplate={selectedValue} name="From card">
                <InputLabel
                    id="card-select-label"
                    sx={{
                        m: '0',
                        color: selectedValue
                            ? `${theme.palette.info?.main}`
                            : `${theme.palette.primary?.dark}`,
                        '&.Mui-focused': {
                            color: selectedValue
                                ? `${theme.palette.info?.main}`
                                : `${theme.palette.primary?.dark}`,
                        },
                    }}
                >
                    Card number
                </InputLabel>
                <Select
                    name={name}
                    data-testid="card-sender"
                    labelId="card-select-label"
                    displayEmpty
                    IconComponent={authDropDownArrow}
                    defaultValue=""
                    value={values.senderCardId}
                    renderValue={
                        selectedValue
                            ? undefined
                            : () => (
                                  <Box
                                      sx={{
                                          color: `${theme.palette.primary?.light}`,
                                      }}
                                  >
                                      Select card
                                  </Box>
                              )
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                '& .MuiButtonBase-root.MuiMenuItem-root.Mui-selected':
                                    {
                                        backgroundColor: `${theme.palette.info?.light}`,
                                    },
                                '& .MuiButtonBase-root.MuiMenuItem-root:hover':
                                    {
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    },
                            },
                        },
                    }}
                    onChange={handleChange}
                    sx={{
                        width: '347px',
                        height: '48px',
                        boxShadow: 'none',
                        m: '8px 0',
                        backgroundColor: `${theme.palette.info?.main}`,
                        '.MuiOutlinedInput-notchedOutline': {
                            border: `1px solid ${theme.palette.primary?.light}`,
                            borderRadius: '0',
                        },
                        '& .MuiSelect-select': { padding: '12px' },
                        '& .MuiSelect-icon': { right: '13px' },
                    }}
                >
                    {cards.length > 0 ? (
                        cards.map((card: CardDataTypes) => {
                            const { id, cardNumber, name, currency, balance } =
                                card
                            return (
                                <MenuItem
                                    key={id}
                                    value={id}
                                    sx={{
                                        backgroundColor: `${theme.palette.info?.main}`,
                                    }}
                                >
                                    {generateCardInformation(cardNumber, name)}
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontSize: '1rem',
                                            color: `${theme.palette.primary?.light}`,
                                        }}
                                    >
                                        &nbsp;
                                        {generateCardBalanceInformation(
                                            currency,
                                            balance
                                        )}
                                    </Typography>
                                </MenuItem>
                            )
                        })
                    ) : (
                        <MenuItem>You do not have any active cards</MenuItem>
                    )}
                </Select>
                {serverError.length > 0 ? (
                    <Typography
                        sx={{
                            lineHeight: '1.25rem',
                            color: `${theme.palette.warning.main}`,
                        }}
                    >
                        {serverError}
                    </Typography>
                ) : (
                    !selectedValue && (
                        <Typography
                            sx={{
                                lineHeight: '1.25rem',
                                color: `${theme.palette.primary?.light}`,
                            }}
                        >
                            Choose your card to make a transfer
                        </Typography>
                    )
                )}
            </CardHeaderComponent>
        </FormControl>
    )
}
