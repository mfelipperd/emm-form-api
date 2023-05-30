export class CreateUserDto {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public cnpj: string,
    public enterpriseName: string,
    public city: string,
    public sector: string,
    public marketing: string,
    public qrcode: string,
    public checkin1: boolean,
    public checkin2: boolean,
    public checkin3: boolean,
  ) {}
}
