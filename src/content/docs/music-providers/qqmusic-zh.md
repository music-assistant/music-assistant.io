---
title: "QQ 音乐"
---

# QQ 音乐 <img src="/assets/icons/qqmusic-icon.svg" alt="QQ Music icon" style="width: 70px; float: right;"  loading="lazy" />

**语言：** [English](/music-providers/qqmusic/) | **中文**

Music Assistant 已支持 <a href="https://y.qq.com/" target="_blank" rel="noopener noreferrer">QQ 音乐</a>。  
由 <a href="https://github.com/xiasi0" target="_blank" rel="noopener noreferrer">xiasi0</a> 贡献与维护。

QQ 音乐是中国大陆最常用的流媒体音乐平台之一，拥有较完整的中文与国际曲库、歌单与推荐能力。

> [!NOTE]
> - 需要 QQ 音乐账号。
> - 订阅版权内容/高音质需要对应会员权益。
> - 本提供商不会绕过平台权限校验。

## 功能

|           |                     |
|:-----------------------|:---------------------:|
| 免费订阅可用 | 否 |
| 本地自托管媒体 | 否 |
| 支持媒体类型 | 歌手、专辑、歌曲、歌单 |
| [发现推荐](/ui/#view-home) | 支持 |
| 歌词 | 支持 |
| [电台模式](/ui/#track-menu) | 支持 |
| 最高音质 | Lossless FLAC（最高 24-bit/192kHz） |
| 登录方式 | QQ App 扫码登录 |

### 其他

- 支持搜索：歌曲、歌手、专辑、歌单
- 支持库同步：喜欢歌曲、关注歌手、收藏专辑、用户歌单
- 库同步当前按单向（QQ 音乐 → Music Assistant）验证
- 当用户所选音质不可用时，自动回退到可用音质

## 资料库同步

可从 QQ 音乐同步到 Music Assistant 的内容包括：

- 喜欢/收藏歌曲
- 喜欢/收藏专辑
- 关注歌手
- 用户歌单

> [!NOTE]
> 当前同步行为按单向（QQ 音乐 → Music Assistant）使用与验证。  
> 从 Music Assistant 回写到 QQ 音乐的同步行为尚未完整验证。

## 配置

### 扫码登录流程（仅 QQ App）

1. 打开 **设置 → 音乐源 → 添加音乐源 → QQ 音乐**。
2. 点击 **QR Login**，会打开新的二维码页面。
3. 使用 **QQ App** 扫码，并在 App 内点击 **登录/确认**。
4. 关闭二维码页面。
5. 回到 Music Assistant 点击 **Save**。

### 设置项

- <b>Preferred quality（首选音质）</b> 可选：
  - MP3 128kbps
  - MP3 320kbps
  - FLAC
  - Hi-Res（不可用时自动回退）

## 已知说明

- 可用性与地区网络环境相关，在中国大陆通常更稳定。
- 由于 QQ 音乐未提供公开的官方可测试 API，本提供商采用网页登录态方式接入，可能受上游变更影响。
- 部分推荐或动态内容在展示后可能变为不可播放。
- 对无权益内容可能返回试听或不可播放。
