import { TEST_WORKSPACE } from '../common';
import {
  Content,
  P,
  Template,
  Title,
  Workspace,
  type WorkspaceProps,
} from '../components';

export type LinkInvitationReviewDeclinedProps = {
  workspace: WorkspaceProps;
};

export default function LinkInvitationReviewDeclined(
  props: LinkInvitationReviewDeclinedProps
) {
  const { workspace } = props;
  return (
    <Template>
      <Title>请求被拒绝</Title>
      <Content>
        <P>
          你加入 <Workspace {...workspace} /> 的请求已被 空间管理员拒绝
        </P>
      </Content>
    </Template>
  );
}

LinkInvitationReviewDeclined.PreviewProps = {
  workspace: TEST_WORKSPACE,
};
