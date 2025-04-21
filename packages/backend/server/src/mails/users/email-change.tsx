import { Bold, Button, Content, P, Template, Title } from '../components';

export type ChangeEmailProps = {
  url: string;
};

export default function ChangeEmail(props: ChangeEmailProps) {
  return (
    <Template>
      <Title>验证你的邮箱地址</Title>
      <Content>
        <P>
          你最近请求更改火花笔记账号的邮箱地址
          <br />
          点击以下链接以完成此步骤：
        </P>
        <P>
          链接会在 <Bold>30 分钟</Bold> 后过期.
        </P>
        <Button href={props.url}>验证你的邮箱地址</Button>
      </Content>
    </Template>
  );
}

ChangeEmail.PreviewProps = {
  url: 'https://app.affine.pro',
};
