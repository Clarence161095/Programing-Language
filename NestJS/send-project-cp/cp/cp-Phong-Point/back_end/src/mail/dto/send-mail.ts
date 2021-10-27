import { AutoMap } from "@automapper/classes";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SendMailDto {
    // to, from, subject, text, html
    @ApiProperty()
    @AutoMap()
    @IsNotEmpty()
    @IsString()
    to: string;

    @ApiProperty()
    @AutoMap()
    @IsNotEmpty()
    @IsString()
    from: string;

    @ApiProperty()
    @AutoMap()
    @IsNotEmpty()
    @IsString()
    subject: string;

    @ApiPropertyOptional()
    @AutoMap()
    @IsOptional()
    @IsString()
    text: string;

    
    @ApiPropertyOptional()
    @AutoMap()
    @IsOptional()
    @IsString()
    html: string;

    @ApiProperty()
    @AutoMap()
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    dateSend: Date;

}