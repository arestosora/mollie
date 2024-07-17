import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateUserInfoDto, CreateBirthDto, CreateDeathDto, CreateMarriageDto, CreateDivorceDto } from './email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('user-info')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createUserInfo(@Body('email') email: string, @Body() createUserInfoDto: CreateUserInfoDto): Promise<void> {
    await this.emailService.createUserInfo(email, createUserInfoDto);
  }

  @Post('birth')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createBirth(@Body('email') email: string, @Body() createBirthDto: CreateBirthDto): Promise<void> {
    await this.emailService.createBirth(email, createBirthDto);
  }

  @Post('death')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createDeath(@Body('email') email: string, @Body() createDeathDto: CreateDeathDto): Promise<void> {
    await this.emailService.createDeath(email, createDeathDto);
  }

  @Post('marriage')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createMarriage(@Body('email') email: string, @Body() createMarriageDto: CreateMarriageDto): Promise<void> {
    await this.emailService.createMarriage(email, createMarriageDto);
  }

  @Post('divorce')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createDivorce(@Body('email') email: string, @Body() createDivorceDto: CreateDivorceDto): Promise<void> {
    await this.emailService.createDivorce(email, createDivorceDto);
  }
}
