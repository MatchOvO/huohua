import { useConfirmModal } from '@affine/component';
import { useI18n } from '@affine/i18n';
import { useMemo } from 'react';

export const useNavConfig = () => {
  const t = useI18n();
  const { openConfirmModal } = useConfirmModal();
  return useMemo(
    () => [
      {
        title: t['com.huohua.website'](),
        action: (e: any) => {
          e.preventDefault();
          openConfirmModal({
            onCancel: false,
            confirmText: t['Got it'](),
            title: t['tips'](),
            children: t['com.huohua.website.missing'](),
          });
        },
      },
      {
        title: t['com.affine.other-page.nav.blog'](),
        action: (e: any) => {
          e.preventDefault();
          openConfirmModal({
            onCancel: false,
            confirmText: t['Got it'](),
            title: t['tips'](),
            children: '火花笔记官方博客暂未上线，敬请期待～',
          });
        },
        // path: 'https://affine.pro/blog',
      },
      {
        title: t['com.affine.other-page.nav.contact-us'](),
        action: (e: any) => {
          e.preventDefault();
          openConfirmModal({
            onCancel: false,
            confirmText: t['Got it'](),
            title: t['tips'](),
            children: '使用遇到问题？联系火柴 - huochai@chenzs.com',
          });
        },
        // path: 'https://affine.pro/about-us',
      },
      {
        title: 'Match0v0',
        path: 'https://www.chenzs.com',
      },
    ],
    [t]
  );
};
