const useOnChange = ({ data, setData }) => {
  const onChangeHandler = (e) => {
    let { name, value } = e.target || e

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return { onChangeHandler }
}

export default useOnChange
