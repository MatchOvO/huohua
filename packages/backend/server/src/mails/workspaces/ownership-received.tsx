import { TEST_WORKSPACE } from '../common';
import {
  Content,
  P,
  Template,
  Title,
  Workspace,
  type WorkspaceProps,
} from '../components';

export type OwnershipReceivedProps = {
  workspace: WorkspaceProps;
};

export default function OwnershipReceived(props: OwnershipReceivedProps) {
  const { workspace } = props;

  return (
    <Template>
      <Title>恭喜你成为空间 Owner!</Title>
      <Content>
        <P>
          你已被赋予空间:
          <Workspace {...workspace} />的 Owner 角色. 作为空间的 Owner
          你可以完全控制此空间。
        </P>
      </Content>
    </Template>
  );
}

OwnershipReceived.PreviewProps = {
  workspace: TEST_WORKSPACE,
};
