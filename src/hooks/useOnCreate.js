const useOnCreate = () => {
  const handleCreate = (data, callback) => {
    const errors = {}

    // Regex pour valider le prénom et nom (lettres uniquement)
    const nameRegex = /^[A-Za-z\s]+$/

    // Regex pour le code postal (5 chiffres)
    const zipCodeRegex = /^\d{5}$/

    // Validation du prénom
    if (!nameRegex.test(data.firstName)) {
      errors.firstName = "First name must contain only letters."
    }

    // Validation du nom
    if (!nameRegex.test(data.lastName)) {
      errors.lastName = "Last name must contain only letters."
    }

    // Validation du code postal
    if (!zipCodeRegex.test(data.zipCode)) {
      errors.zipCode = "Zip code must be a 5-digit number."
    }

    callback(errors)
  }

  return {
    handleCreate,
  }
}

export default useOnCreate
