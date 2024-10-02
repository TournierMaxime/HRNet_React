const useOnChange = ({ data, setData }) => {
  const formatDate = (date) => {
    if (!date) return ""
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = String(date.getFullYear())
    return `${year}-${month}-${day}` // Format YYYY-MM-DD
  }

  const onChangeHandler = (e) => {
    let { name, value } = e.target || e

    if (value instanceof Date) {
      // Formatage de la date avant de la stocker dans le state
      value = formatDate(value)
    }

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return { onChangeHandler }
}

export default useOnChange
