const { google } = require('googleapis');
const storage = google.storage('v1');
const datastore = google.datastore("v1");
const AWS = require('aws-sdk');
const MyConfig = require('./helpers/MyConfig');

//////////////////////　実行準備 ////////////////////////////////////////////////////////////
// Lambda登録時に環境変数「GOOGLE_APPLICATION_CREDENTIALS」を指定する
// GOOGLE_APPLICATION_CREDENTIALS=./gcp_user.json
// GCPからAWSのクレデンシャルが必要な処理を実行する場合は、通常通り以下２つの環境変数を設定する
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY

// ./gcp_user.json に、GCP側の利用サービスの権限を持ったサービスアカウントの
// JSONをダウンロードして保存すること(このファイルはGitにあげるとヤバいのでgitignoreしています。)

// Lambda実行時に、ハンドラには「index.gcpTest」を指定する
/////////////////////////////////////////////////////////////////////////////////////////////
async function onPutStorage(putStoragePath) {

    const client = await google.auth.getClient({
        // Scopes can be specified either as an array or as a single, space-delimited string.
        scopes: [
            'https://www.googleapis.com/auth/devstorage.full_control',
            'https://www.googleapis.com/auth/datastore',
        ]
    });
    const projectId = await google.auth.getDefaultProjectId();

    console.log(projectId);

    configRoot = new MyConfig();
    configRoot.say();



}

exports.onPutStorage = onPutStorage;

// テスト・デバッグ時に有効化する
onPutStorage().catch(console.error);
