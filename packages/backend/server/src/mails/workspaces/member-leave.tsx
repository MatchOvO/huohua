import { TEST_USER, TEST_WORKSPACE } from '../common';
import {
  Content,
  Name,
  P,
  Template,
  Title,
  type UserProps,
  Workspace,
  type WorkspaceProps,
} from '../components';

export type MemberLeaveProps = {
  user: UserProps;
  workspace: WorkspaceProps;
};

export default function MemberLeave(props: MemberLeaveProps) {
  const { user, workspace } = props;
  return (
    <Template>
      <Title>
        成员离开 <Workspace {...workspace} size={24} />
      </Title>
      <Content>
        <P>
          <Name>{user.email}</Name> 离开了空间 <Workspace {...workspace} />
        </P>
      </Content>
    </Template>
  );
}

MemberLeave.PreviewProps = {
  user: TEST_USER,
  workspace: TEST_WORKSPACE,
};
