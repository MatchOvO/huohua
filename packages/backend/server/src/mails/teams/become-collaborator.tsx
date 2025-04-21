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

export type TeamBecomeCollaboratorProps = {
  workspace: WorkspaceProps;
  url: string;
};

export default function TeamBecomeCollaborator(
  props: TeamBecomeCollaboratorProps
) {
  const { workspace, url } = props;

  return (
    <Template>
      <Title>空间角色变更</Title>
      <Content>
        <P>
          你在 <Workspace {...workspace} /> 的角色变更为 参与者。
          你可以继续作为参与者参与空间。
        </P>
        <Button href={url}>Go to Workspace</Button>
      </Content>
    </Template>
  );
}

TeamBecomeCollaborator.PreviewProps = {
  workspace: TEST_WORKSPACE,
  role: 'admin',
  url: 'https://app.affine.pro',
};
