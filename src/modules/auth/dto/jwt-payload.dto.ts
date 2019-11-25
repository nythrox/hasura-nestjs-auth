class JwtPayloadDto {
    public readonly sub : string
    public readonly username : string
    public readonly claims : JwtHasuraClaimsDto
}