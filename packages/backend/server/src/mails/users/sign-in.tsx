import {
  Button,
  Content,
  OnelineCodeBlock,
  P,
  SecondaryText,
  Template,
  Title,
} from '../components';

export type SignInProps = {
  url: string;
  otp: string;
};

export default function SignIn(props: SignInProps) {
  return (
    <Template>
      <Title>登录 火花笔记</Title>
      <Content>
        <P>你正在登录火花笔记。 以下是你的验证码:</P>
        <OnelineCodeBlock>{props.otp}</OnelineCodeBlock>
        <P>你也可以通过以下链接进行 快速登录:</P>
        <Button href={props.url}>登录链接</Button>
        <P>
          <SecondaryText>验证码和登录链接会在三十分钟后过期。</SecondaryText>
        </P>
      </Content>
    </Template>
  );
}

SignIn.PreviewProps = {
  url: 'https://app.affine.pro/magic-link?token=123456&email=test@test.com',
  otp: '123456',
};
