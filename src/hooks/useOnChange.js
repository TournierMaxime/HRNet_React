const useOnChange = ({ data, setData }) => {
  const formatDate = (date) => {
    if (!date) return ""
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = String(date.getFullYear()).slice(-2)
    return `${day}/${month}/${year}`
  }

  const onChangeHandler = (e) => {
    let { name, value } = e.target || e

    if (value instanceof Date) {
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
