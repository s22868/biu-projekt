const normalizePrice = (price: number, locale: string) => {
  return price.toLocaleString(locale, {
    style: 'currency',
    currency: 'PLN',
  })
}

export default normalizePrice
