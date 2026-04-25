---
title: "网易云音乐"
---

# 网易云音乐 <img src="/assets/icons/netease-cloud-music-icon.png" alt="NetEase Cloud Music icon" style="width: 70px; float: right;" loading="lazy" />

**语言：** [English](/music-providers/netease-cloud-music/) | **中文**

Music Assistant 已支持 <a href="https://music.163.com/" target="_blank" rel="noopener noreferrer">网易云音乐</a>。  
由 <a href="https://github.com/xiasi0" target="_blank" rel="noopener noreferrer">xiasi0</a> 贡献与维护。

网易云音乐是中国大陆主要流媒体平台之一，提供中文曲库、推荐内容与歌词能力。

> [!NOTE]
> - 需要网易云音乐账号。
> - 当前该提供商依赖本地运行的 NeteaseCloudMusicApi 兼容服务。
> - 本提供商不会绕过平台权限校验。

## 功能

|           |                     |
|:-----------------------|:---------------------:|
| 免费订阅可用 | 否 |
| 本地自托管媒体 | 否 |
| 支持媒体类型 | 歌手、专辑、歌曲、歌单、电台 |
| [发现推荐](/ui/#view-home) | 支持 |
| 歌词 | 支持 |
| [电台模式](/ui/#track-menu) | 支持 |
| 最高音质 | Hi-Res FLAC（取决于上游接口返回） |
| 登录方式 | 网易云 App 扫码登录 |

### 其他

- 支持搜索：歌曲、歌手、专辑、歌单
- 支持同步：喜欢/收藏内容与用户歌单
- 动态推荐/电台条目包括：每日推荐歌曲、每日推荐歌单、私人 FM、心动模式
- 库同步当前按单向（网易云音乐 -> Music Assistant）使用

## 配置

### 后端 API 服务

该提供商需要可访问的 NeteaseCloudMusicApi 兼容 HTTP 服务（默认：`http://127.0.0.1:3000`）。

Home Assistant 用户可参考配套 add-on PR：  
<a href="https://github.com/music-assistant/home-assistant-addon/pull/16" target="_blank" rel="noopener noreferrer">home-assistant-addon#16</a>

### 扫码登录流程（网易云 App）

1. 打开 **设置 -> 音乐源 -> 添加音乐源 -> 网易云音乐**。
2. 将 **API base URL** 设置为你的本地 API 服务地址。
3. 点击 **QR Login**，会弹出新的二维码页面。
4. 使用 **网易云音乐 App** 扫码，并在 App 内确认登录。
5. 关闭二维码页面。
6. 回到 Music Assistant 点击 **Save**。

## 合规与说明

- 播放严格遵循上游返回的账号与歌曲权限。
- 对无权益内容可能返回试听/受限播放，或返回不可播放 URL。
- 不使用任何解锁、破解或绕过订阅限制的逻辑。
