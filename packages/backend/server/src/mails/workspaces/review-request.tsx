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

export type LinkInvitationReviewRequestProps = {
  workspace: WorkspaceProps;
  user: UserProps;
  url: string;
};

export default function LinkInvitationReviewRequest(
  props: LinkInvitationReviewRequestProps
) {
  const { workspace, user, url } = props;
  return (
    <Template>
      <Title>
        请求加入 <Workspace {...workspace} size={24} />
      </Title>
      <Content>
        <P>
          <User {...user} /> 请求加入 <Workspace {...workspace} />.
          <br />
          作为空间 owner/admin, 你可以拒绝或同意此请求。
        </P>
        <Button href={url}>查看请求</Button>
      </Content>
    </Template>
  );
}

LinkInvitationReviewRequest.PreviewProps = {
  workspace: TEST_WORKSPACE,
  user: TEST_USER,
  url: 'https://app.affine.pro',
};
