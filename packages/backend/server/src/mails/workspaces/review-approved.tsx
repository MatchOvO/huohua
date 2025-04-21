import { TEST_WORKSPACE } from '../common';
import {
  Button,
  Content,
  P,
  Template,
  Title,
  Workspace,
  type WorkspaceProps,
} from '../components';

export type LinkInvitationApprovedProps = {
  workspace: WorkspaceProps;
  url: string;
};

export default function LinkInvitationApproved(
  props: LinkInvitationApprovedProps
) {
  const { workspace, url } = props;
  return (
    <Template>
      <Title>欢迎加入空间！</Title>
      <Content>
        <P>
          你加入 <Workspace {...workspace} /> 的请求已被同意。
          现在你可以与其他参与者一起访问此空间。
        </P>
      </Content>
      <Button href={url}>Open Workspace</Button>
    </Template>
  );
}

LinkInvitationApproved.PreviewProps = {
  workspace: TEST_WORKSPACE,
  url: 'https://app.affine.pro',
};
