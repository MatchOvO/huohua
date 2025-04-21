import { Bold, Button, Content, P, Template, Title } from '../components';

export type ChangePasswordProps = {
  url: string;
};

export default function ChangePassword(props: ChangePasswordProps) {
  return (
    <Template>
      <Title>更改密码</Title>
      <Content>
        <P>
          点击下方链接重设密码，链接会在 <Bold>30 分钟</Bold>后过期。
        </P>
        <Button href={props.url}>设置新密码</Button>
      </Content>
    </Template>
  );
}

ChangePassword.PreviewProps = {
  url: 'https://app.affine.pro',
};
