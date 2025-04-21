import {
  Button,
  Content,
  OnelineCodeBlock,
  P,
  SecondaryText,
  Template,
  Title,
} from '../components';

export type SignUpProps = {
  url: string;
  otp: string;
};

export default function SignUp(props: SignUpProps) {
  return (
    <Template>
      <Title>注册 火花笔记</Title>
      <Content>
        <P>你正在注册火花笔记。 以下是你的验证码:</P>
        <OnelineCodeBlock>{props.otp}</OnelineCodeBlock>
        <P>你也可以通过以下链接完成 注册:</P>
        <Button href={props.url}>注册链接</Button>
        <P>
          <SecondaryText>验证码和注册链接会在三十分钟后过期。</SecondaryText>
        </P>
      </Content>
    </Template>
  );
}

SignUp.PreviewProps = {
  url: 'https://app.affine.pro/magic-link?token=123456&email=test@test.com',
  otp: '123456',
};
