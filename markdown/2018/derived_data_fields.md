## Derived HMDA Data Fields 

_This guide explains fields that are included in public HMDA data collected in 2018 and beyond, that have been modified from the original loan record to protect privacy, or added to enhance the usefulness of the data. Derived fields used in HMDA data and publication products, such as Race, Sex, and Ethnicity, were aggregated from the source data, following a methodology developed by the CFPB for analysis and privacy protection, but are not an official and sole government definition. Researchers and technical professionals interested in the methodology can refer to the Derived Fields Categorization wiki or the Data Disclosure Policy._


### [derived\_ethnicity](#derived_ethnicity)

- **Description:** Single aggregated ethnicity categorization  derived from applicant/borrower and co-applicant/co-borrower ethnicity fields
- **Field Data Type:** Alphanumeric
- **Values:**
  - Hispanic or Latino
  - Not Hispanic or Latino
  - Joint
  - Ethnicity Not Available
  - Free Form Text Only

### [derived\_race](#derived_race)

- **Description:** Single aggregated race categorization derived from applicant/borrower and co-applicant/co-borrower race fields
- **Field Data Type:** Alphanumeric
- **Values:**
  - American Indian or Alaska Native
  - Asian
  - Black or African American
  - Native Hawaiian or Other Pacific Islander
  - White
  - 2 or more minority races
  - Joint
  - Free Form Text Only
  - Race Not Available

### [derived\_sex](#derived_sex)

- **Description:** Single aggregated sex categorization derived from applicant/borrower and co-applicant/co-borrower sex fields
- **Field Data Type:** Alphanumeric
- **Values:**
  - Male
  - Female
  - Joint
  - Sex Not Available

### [derived\_loan\_product\_type](#derived_loan_product_type)

- **Description:** Derived loan product type from Loan Type and Lien Status fields for easier querying of specific records
- **Field Data Type:** Alphanumeric
- **Values:**
  - Conventional: First Lien
  - FHA: First Lien
  - VA: First Lien
  - FSA/RHS: First Lien
  - Conventional: Subordinate Lien
  - FHA: Subordinate Lien
  - VA: Subordinate Lien
  - FSA/RHS: Subordinate Lien

### [derived\_dwelling\_category](#derived_dwelling_category)

- **Description:** Derived dwelling type from Construction Method and Total Units fields for easier querying of specific records
- **Field Data Type:** Alphanumeric
- **Values:**
  - Single Family (1-4 Units): Site-Built
  - Multifamily: Site-Built
  - Single Family (1-4 Units): Manufactured
  - Multifamily: Manufactured

### [conforming\_loan\_limit](#conforming_loan_limit)

- **Description:** Indicates whether the reported loan amount exceeds the GSE (government sponsored enterprise) conforming loan limit
- **Field Data Type:** Alphanumeric
- **Values:**
  - C (Conforming)
  - NC (Nonconforming)
  - U (Undetermined)
  - NA (Not Applicable)

### [derived\_msa-md](#derived_msa-md)

- **Description:** Derived MSA/MD from the property location reported for the record
- **Field Data Type:** Alphanumeric
- **Values:**
  - Varying values

### [applicant\_age\_above\_62](#applicant_age_above_62)

- **Description:** Whether the applicant or borrower age is above 62
- **Field Data Type:** Alphanumeric
- **Values:**
  - Yes
  - No
  - NA

### [co-applicant\_age\_above\_62](#co-applicant_age_above_62)

- **Description:** Whether the first co-applicant or co-borrower age is above 62
- **Field Data Type:** Alphanumeric
- **Values:**
  - Yes
  - No
  - NA

