# 散歩を楽しむためのウェブアプリ（ハッカソン作品）

## 概要

- **ハッカソン開催日**：2023年10月26日
- **作品概要**：散歩をより楽しくすることを目的としたウェブアプリです。Google Maps API を使用し、ユーザーの現在地からランダムに選ばれた地点へのルートを表示します。

## アプリの特徴

- アプリを起動すると、現在地から半径 5km 圏内でランダムな地点とルートが表示されます。
- 実際にその目的地まで歩いていき、散歩を楽しむことができます。
- リロードするたびに目的地が変わるため、新しい場所を発見する楽しみがあります。飽きずに足が動くまで歩き回りましょう！

## 注意事項

- このアプリは Google Maps API を利用していますが、データの超過使用による請求が発生したため、API キーは外した状態で push しています。
- 下記を参考に各自のローカル環境で `.env` ファイルを作成し、Google Maps API キーを発行して設定してください。

# Google Maps API、Geolocation API、Directions API の取得方法

## 1. Google Cloud Platform のアカウント作成・プロジェクト作成

1. [Google Cloud Console](https://console.cloud.google.com/) にアクセスします。
2. Google アカウントでログインし、コンソールにアクセスします。
3. 左上のナビゲーションメニューから「**プロジェクトの選択**」を選択し、「**新しいプロジェクトを作成**」をクリックして新しいプロジェクトを作成します。

## 2. API の有効化

### 1. Maps JavaScript API の有効化

1. [Maps JavaScript API ページ](https://console.cloud.google.com/apis/library/maps-backend.googleapis.com) に移動します。
2. 「**有効にする**」ボタンをクリックして Maps JavaScript API を有効化します。

### 2. Geolocation API の有効化

1. [Geolocation API ページ](https://console.cloud.google.com/apis/library/geolocation.googleapis.com) に移動します。
2. 「**有効にする**」ボタンをクリックして Geolocation API を有効化します。

### 3. Directions API の有効化

1. [Directions API ページ](https://console.cloud.google.com/apis/library/directions.googleapis.com) に移動します。
2. 「**有効にする**」ボタンをクリックして Directions API を有効化します。

## 3. API キーの取得

1. 左側のメニューから「**API とサービス > 認証情報**」を選択します。
2. 「**認証情報を作成**」ボタンをクリックし、「**API キー**」を選択します。
3. API キーが生成されるので、コピーしてメモしておきます。このキーが、Google Maps API、Geolocation API、Directions API を使用する際に必要です。
