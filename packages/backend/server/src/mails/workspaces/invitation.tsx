import { TEST_USER, TEST_WORKSPACE } from '../common';
import {
  Button,
  Content,
  P,
  Template,
  Title,
  User,
  type UserProps,
  Workspace,
  type WorkspaceProps,
} from '../components';

export type InvitationProps = {
  user: UserProps;
  workspace: WorkspaceProps;
  url: string;
};

export default function Invitation(props: InvitationProps) {
  const { user, workspace, url } = props;

  return (
    <Template>
      <Title>你被邀请了！</Title>
      <Content>
        <P>
          <User {...user} /> 邀请你加入空间: <Workspace {...workspace} />
        </P>
        <P>点击下方按钮接收邀请:</P>
        <Button href={url}>同意&加入</Button>
      </Content>
    </Template>
  );
}

Invitation.PreviewProps = {
  user: TEST_USER,
  workspace: TEST_WORKSPACE,
  url: 'https://app.affine.pro',
};
