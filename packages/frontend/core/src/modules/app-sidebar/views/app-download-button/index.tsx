import { useConfirmModal } from '@affine/component';
import { useCatchEventCallback } from '@affine/core/components/hooks/use-catch-event-hook';
import { useI18n } from '@affine/i18n';
import { track } from '@affine/track';
import { CloseIcon, DownloadIcon } from '@blocksuite/icons/rc';
import clsx from 'clsx';
import { useCallback, useState } from 'react';

import * as styles from './index.css';

export function AppDownloadButton({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const [show, setShow] = useState(true);
  const { openConfirmModal } = useConfirmModal();
  const t = useI18n();

  const handleClose = useCatchEventCallback(() => {
    setShow(false);
  }, []);

  // TODO(@JimmFly): unify this type of literal value.
  const handleClick = useCallback(() => {
    openConfirmModal({
      confirmText: t['Confirm'](),
      cancelText: t['Cancel'](),
      title: t['tips'](),
      children:
        '火花笔记 APP 暂未上线，你可以下载 AFFiNE 官方APP接入火花Cloud，是否跳转下载？',
      onConfirm: () => {
        track.$.navigationPanel.bottomButtons.downloadApp();
        const url = `https://affine.pro/download?channel=stable`;
        open(url, '_blank');
      },
    });
  }, []);

  if (!show) {
    return null;
  }
  return (
    <button
      style={style}
      className={clsx([styles.root, styles.rootPadding, className])}
      onClick={handleClick}
    >
      <div className={clsx([styles.label])}>
        <DownloadIcon className={styles.icon} />
        <span className={styles.ellipsisTextOverflow}>Download App</span>
      </div>
      <div className={styles.closeIcon} onClick={handleClose}>
        <CloseIcon />
      </div>
      <div className={styles.particles} aria-hidden="true"></div>
      <span className={styles.halo} aria-hidden="true"></span>
    </button>
  );
}
