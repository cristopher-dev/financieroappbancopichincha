/**
 * Validates a product ID.
 * @param {string} id - The product ID to validate.
 * @returns {string | null} - An error message if validation fails, otherwise null.
 */
export const validateProductId = (id) => {
  if (!id) return 'The Id field is required';
  if (id.length < 3 || id.length > 10) return 'Id must be between 3 and 10 characters';
  // Here, you should add logic to check if the ID already exists
  // For example, you can make an API call to check if the ID is already in use
  return null;
};

/**
 * Validates a product name.
 * @param {string} name - The product name to validate.
 * @returns {string | null} - An error message if validation fails, otherwise null.
 */
export const validateProductName = (name) => {
  if (!name) return 'The Name field is required';
  if (name.length < 5 || name.length > 100) return 'Name must be between 5 and 100 characters';
  return null;
};

/**
 * Validates a product description.
 * @param {string} description - The product description to validate.
 * @returns {string | null} - An error message if validation fails, otherwise null.
 */
export const validateProductDescription = (description) => {
  if (!description) return 'The Description field is required';
  if (description.length < 10 || description.length > 200) return 'Description must be between 10 and 200 characters';
  return null;
};

/**
 * Validates a product release date.
 * @param {string} releaseDate - The release date to validate.
 * @returns {string | null} - An error message if validation fails, otherwise null.
 */
export const validateProductReleaseDate = (releaseDate) => {
  if (!releaseDate) return 'Release Date is required';
  const currentDate = new Date();
  const inputDate = new Date(releaseDate);
  if (inputDate < currentDate) return 'Release Date must be today or in the future';
  return null;
};

/**
 * Validates a product review date.
 * @param {string} reviewDate - The review date to validate.
 * @param {string} releaseDate - The product's release date for comparison.
 * @returns {string | null} - An error message if validation fails, otherwise null.
 */
export const validateProductReviewDate = (reviewDate, releaseDate) => {
  if (!reviewDate) return 'Review Date is required';

  try {
    const oneYearAfterRelease = new Date(releaseDate);
    oneYearAfterRelease.setFullYear(oneYearAfterRelease.getFullYear() + 1);

    const inputReviewDate = new Date(reviewDate);
    if (isNaN(oneYearAfterRelease.getTime()) || isNaN(inputReviewDate.getTime())) {
      return 'One of the provided dates is not valid';
    }

    if (inputReviewDate.toISOString().split('T')[0] !== oneYearAfterRelease.toISOString().split('T')[0]) {
      return 'Review Date must be exactly one year after the Release Date';
    }
  } catch (error) {
    console.error('Error validating date:', error);
    return 'Error processing dates';
  }

  return null;
};

/**
 * Validates a product logo URL.
 * @param {string} logo - The product logo URL to validate.
 * @returns {string | null} - An error message if validation fails, otherwise null.
 */
export const validateProductLogo = (logo) => {
  if (!logo) return 'The Logo field is required';

  // Regular expression to validate a URL
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' +
      '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' +
      '(\\#[-a-zA-Z\\d_]*)?$',
    'i'
  );

  if (!urlPattern.test(logo)) return 'The Logo URL is not valid';

  return null;
};
