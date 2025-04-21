import { Bold, Button, Content, P, Template, Title } from '../components';

export type SetPasswordProps = {
  url: string;
};

export default function SetPassword(props: SetPasswordProps) {
  return (
    <Template>
      <Title>设置你的 火花笔记 密码</Title>
      <Content>
        <P>
          点击下方按钮设置密码。 链接会在
          <Bold>30 分钟</Bold>后过期。
        </P>
        <Button href={props.url}>登录 火花笔记</Button>
      </Content>
    </Template>
  );
}

SetPassword.PreviewProps = {
  url: 'https://app.affine.pro',
};
