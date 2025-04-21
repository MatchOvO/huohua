import { TEST_WORKSPACE } from '../common';
import {
  Content,
  P,
  Template,
  Title,
  Workspace,
  type WorkspaceProps,
} from '../components';

export type MemberRemovedProps = {
  workspace: WorkspaceProps;
};

export default function MemberRemoved(props: MemberRemovedProps) {
  const { workspace } = props;
  return (
    <Template>
      <Title>空间权限被移除</Title>
      <Content>
        <P>
          你已被移除 <Workspace {...workspace} /> 的权限。 现在你无法
          再访问此空间
        </P>
      </Content>
    </Template>
  );
}

MemberRemoved.PreviewProps = {
  workspace: TEST_WORKSPACE,
};
