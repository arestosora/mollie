import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserInfoDto {
  @IsNotEmpty()
  @IsString()
  'first-name': string;

  @IsNotEmpty()
  @IsString()
  'last-name': string;

  @IsOptional()
  @IsString()
  'company-name'?: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  'address-line1': string;

  @IsOptional()
  @IsString()
  'address-line2'?: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  postcode: string;

  @IsOptional()
  @IsString()
  county?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  'order-notes'?: string;
}


export class CreateBirthDto {
  @IsNotEmpty()
  @IsString()
  'Registry-Office': string;

  @IsNotEmpty()
  @IsString()
  'Processing-Speed': string;

  @IsNotEmpty()
  @IsString()
  Digital: string;

  @IsNotEmpty()
  @IsString()
  'Date-Day': string;

  @IsNotEmpty()
  @IsString()
  'Date-Month': string;

  @IsNotEmpty()
  @IsString()
  'Date-Year': string;

  @IsNotEmpty()
  @IsString()
  Adopted: string;

  @IsNotEmpty()
  @IsString()
  'Place-of-Birth': string;

  @IsNotEmpty()
  @IsString()
  'First-Name-s-at-Birth': string;

  @IsNotEmpty()
  @IsString()
  'Surname-at-Birth': string;

  @IsNotEmpty()
  @IsString()
  'Father-Name-s': string;

  @IsNotEmpty()
  @IsString()
  'Father-Surname': string;

  @IsNotEmpty()
  @IsString()
  'Mother-Name-s': string;

  @IsNotEmpty()
  @IsString()
  'Mother-Surname': string;

  @IsOptional()
  @IsString()
  'Mother-s-Maiden-Surname'?: string;

  @IsNotEmpty()
  @IsString()
  Apostilled: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  pricetotal: number;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class CreateDeathDto {
  @IsNotEmpty()
  @IsString()
  'Registry-Office': string;

  @IsNotEmpty()
  @IsString()
  'Processing-Speed': string;

  @IsNotEmpty()
  @IsString()
  Digital: string;

  @IsNotEmpty()
  @IsString()
  'Date-Day': string;

  @IsNotEmpty()
  @IsString()
  'Date-Month': string;

  @IsNotEmpty()
  @IsString()
  'Date-Year': string;

  @IsNotEmpty()
  @IsString()
  'Is-the-Person-In-Enquity-a-Female': string;

  @IsNotEmpty()
  'Age-at-death-in-Years': number;

  @IsNotEmpty()
  @IsString()
  'First-Name-s-of-the-Deceased': string;

  @IsNotEmpty()
  @IsString()
  'Surname-of-Deceased': string;

  @IsNotEmpty()
  @IsString()
  'Place-of-Death-or-last-Known-Address': string;

  @IsOptional()
  @IsString()
  'Occupation-of-Deceased'?: string;

  @IsNotEmpty()
  @IsString()
  Apostilled: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  pricetotal: number;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class CreateMarriageDto {
  @IsNotEmpty()
  @IsString()
  'Registry-Office': string;

  @IsNotEmpty()
  @IsString()
  'Processing-Speed': string;

  @IsNotEmpty()
  @IsString()
  Digital: string;

  @IsNotEmpty()
  @IsString()
  'Date-Day': string;

  @IsNotEmpty()
  @IsString()
  'Date-Month': string;

  @IsNotEmpty()
  @IsString()
  'Date-Year': string;

  @IsNotEmpty()
  @IsString()
  'Place-of-Marriage': string;

  @IsNotEmpty()
  @IsString()
  'Husband-s-Name-s': string;

  @IsNotEmpty()
  @IsString()
  'Husband-s-Surname': string;

  @IsNotEmpty()
  @IsString()
  'Wife-s-Name-s': string;

  @IsNotEmpty()
  @IsString()
  'Wife-s-Surname': string;

  @IsNotEmpty()
  @IsString()
  Apostilled: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  pricetotal: number;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class CreateDivorceDto {
  @IsOptional()
  @IsString()
  Information?: string;

  @IsOptional()
  @IsString()
  'Name-of-Court'?: string;

  @IsOptional()
  @IsString()
  'Case-Number'?: string;

  @IsOptional()
  'Date-or-year-The-Decree-NISI-was-made-absolute'?: string;

  @IsOptional()
  @IsString()
  Period?: string;

  @IsOptional()
  @IsString()
  'First-Name-Applicant'?: string;

  @IsOptional()
  @IsString()
  'Surname-Applicant'?: string;

  @IsOptional()
  @IsString()
  'First-Name-Respondent'?: string;

  @IsOptional()
  @IsString()
  'Surname-Respondant'?: string;

  @IsOptional()
  @IsString()
  'The-Court-Where-It-Was-Filed'?: string;

  @IsOptional()
  @IsString()
  'The-Court-Where-It-Was-Pronounced'?: string;

  @IsOptional()
  @IsString()
  'Date-Of-Marriage'?: string;

  @IsOptional()
  @IsString()
  'Date-Of-Separation'?: string;

  @IsOptional()
  @IsString()
  'Date-Or-Year-The-Decree-NISI-Was-Pronounced'?: string;

  @IsOptional()
  @IsString()
  'Date-Or-Year-The-Petition-Was-Filed'?: string;

  @IsOptional()
  @IsString()
  Apostilled?: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  pricetotal?: number;

  @IsOptional()
  @IsString()
  description?: string;
}