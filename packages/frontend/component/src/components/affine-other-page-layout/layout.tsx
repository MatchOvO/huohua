import { useConfirmModal } from '@affine/component';
import { Button } from '@affine/component/ui/button';
import { useI18n } from '@affine/i18n';
import { useTheme } from 'next-themes';
import { type ReactNode, useCallback } from 'react';

import Logo1Icon from '../huohua/Logo1';
import dotBgDark from './assets/dot-bg.dark.png';
import dotBgLight from './assets/dot-bg.light.png';
import { DesktopNavbar } from './desktop-navbar';
import * as styles from './index.css';
import { MobileNavbar } from './mobile-navbar';

export const AffineOtherPageLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  const t = useI18n();
  const { openConfirmModal } = useConfirmModal();

  const openDownloadLink = useCallback(() => {
    openConfirmModal({
      confirmText: t['Confirm'](),
      cancelText: t['Cancel'](),
      title: t['tips'](),
      children:
        '火花笔记 APP 暂未上线，你可以下载 AFFiNE 官方APP接入火花Cloud，是否跳转下载？',
      onConfirm: () => {
        const url = `https://affine.pro/download?channel=stable`;
        open(url, '_blank');
      },
    });
  }, []);

  const { resolvedTheme } = useTheme();
  const backgroundImage =
    resolvedTheme === 'dark' && dotBgDark ? dotBgDark : dotBgLight;

  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {BUILD_CONFIG.isElectron ? (
        <div className={styles.draggableHeader} />
      ) : (
        <div className={styles.topNav}>
          <a href="/" rel="noreferrer" className={styles.affineLogo}>
            <Logo1Icon width={24} height={24} />
          </a>

          <DesktopNavbar />
          <Button
            onClick={openDownloadLink}
            className={styles.hideInSmallScreen}
          >
            {t['com.affine.auth.open.affine.download-app']()}
          </Button>
          <MobileNavbar />
        </div>
      )}

      {children}
    </div>
  );
};
