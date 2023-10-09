import { BuiltInProviderType, RedirectableProviderType } from 'next-auth/providers/index'
import { SignInAuthorizationParams, SignInOptions, SignInResponse } from 'next-auth/react'

export interface NaverSignInOutButtonProps {
  signIn: <P extends RedirectableProviderType | undefined = undefined>(
    provider?: P extends RedirectableProviderType ? P | BuiltInProviderType : BuiltInProviderType,
    options?: SignInOptions,
    authorizationParams?: SignInAuthorizationParams,
  ) => Promise<P extends RedirectableProviderType ? SignInResponse | undefined : undefined>
}
