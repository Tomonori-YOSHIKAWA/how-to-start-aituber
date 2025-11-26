// アプリケーションのデフォルト設定値
const DEFAULT_SETTINGS = {
  // YouTube設定
  YOUTUBE_API_KEY: '',
  VIDEO_ID: '',
  WAIT_TIME: 10, // チャット取得間隔（秒）
  MESSAGE_LIFETIME: 300, // メッセージの保持期間（秒）

  // Dify設定
  DIFY_API_KEY: 'app-TbCNFXf0eIQzbMgoh7JSqIxs',
  DIFY_API_ENDPOINT: 'http://172.188.120.18/v1',

  // VOICEVOX設定
  VOICEVOX_ENDPOINT: 'http://localhost:50021',
  VOICEVOX_SPEAKER: 2,

  // VTubeStudio設定
  VTS_PORT: 8001, // VTubeStudioのプラグインAPIポート番号

  // 会話履歴の設定を追加
  CONVERSATION_HISTORY_SIZE: 10, // 保持する会話の数（0-100）
};

// 他のJavaScriptファイルから参照できるようにエクスポート
export { DEFAULT_SETTINGS };
