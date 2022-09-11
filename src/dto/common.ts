export class RespsonseDto {}

export class RequestDto {}

export class ErrorResponseDto extends RespsonseDto {
  message: string;
  status: number;

  constructor(message: string, status: number) {
    super();
    this.message = message;
    this.status = status;
  }
}
