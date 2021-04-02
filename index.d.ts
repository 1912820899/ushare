/**
 * Ulink配置
 */
interface LinkConfig {
  id: string; // 必填参数,后台生成的linkid
  data?: { [key: string]: string; }; // 自定义参数例如{a:1,b:2} 换起应用时会携带过去并映射成a=1&b=2
}
/**
 * 配置下发回调
 */
type ReadyCallback = {
  (ctx: LinkInstance): void;
};
/**
 * 配置下发内容
 */
interface ISolutions {
  wakeupUrl: string; // 唤起地址
  type: "scheme" | "universalLink"; // 唤起类型
  downloadUrl: string; // 下载地址
  appkey: string; // 对应appkey
}
interface IWakeup {
  action?: "" | "load" | "click"; // 设置统计上报的唤起方式
  proxyOpenDownload?: IProxyOpenDownload; // 代理打开下载提示行为
  beforeOpenDownload?: ICallback;
  afterOpenDownload?: ICallback;
  timeout?: number; //触发弹窗等待超时时间单位毫秒，默认200毫秒，安卓中微信强制为0
}
type ICallback = {
  (ctx: LinkInstance): void;
};
type defaultActionCallback = {
  (extdata?: { [key: string]: unknown; }): void;
};
type IProxyOpenDownload = {
  (defaultAction: defaultActionCallback, ctx: LinkInstance): unknown; // 如仍需执行默认弹窗行为可调用defaultActionCallback
};
/**
 * Ulink实例
 */
interface LinkInstance {
  ready (callback: ReadyCallback): void; // 配置下发
  wakeup (config: IWakeup): LinkInstance; // 唤起
  solution: ISolutions; // 配置下发内容
}

declare namespace ulink {
  /**
   * sdk版本
   */
  export const version: string;
  /**
   * 创建Link实例
   * @param config 实例配置
   */
  /* 分享URl参数 */
  interface IUrlParams {
    [key: string]: string | number;
    um_rtc: string;
    linkid: string;
  }
  export function start (config: LinkConfig): LinkInstance;
  export function getUriDecodeParams (): IUrlParams;
  /* tracker对象信息 */
  export interface MetaInfo {
    /** openid */
    oid: string;
    /** 追踪码对应的urlkey */
    trackkey?: string;
    /** 来源追踪码 */
    trackcode?: string;
    /** 原始追踪码 */
    root_track_code?: string;
    /** 原始来源key */
    root_track_key?: string;
    /** 当前页面地址 */
    trackurl?: string;
    /** unionid */
    uid?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像 */
    avator?: string;
  }

  type NtcCallback = {
    (ntc: string): void;//新的追踪码
  };
  export interface Shareinfo {
    /** 分享标题 */
    title?: string,
    /** 分享描述 */
    desc?: string,
    /** 分享图片 */
    imgUrl?: string,
    /** 分享链接 */
    link: string,
    /** 分享场景 */
    scene?: string;
  }
  interface PageConfig {
    /** 页面地址 */
    page: string,
    /** 页面名称 */
    page_name?: string;
  }
  export const tracker:tracker;
  export interface tracker {
    /** 设置追踪信息**/
    setMetaInfo (MetaInfo: MetaInfo): MetaInfo;
    /** 获取公共信息n */
    getMetaInfo (): MetaInfo;
    /** 获取追踪码 */
    getNextTrackCode (callback?: NtcCallback): void;
    /** 发送分享事件 */
    trackShare (data: Shareinfo): void;
    /** pv事件 */
    enter (config: PageConfig, callback?: Function): void;
  }
}
type ProxyOpenInBrowerTips = {
  (): string;
};
type ProxyShowLoading = {
  (): void;
};
type ProxySHideLoading = {
  (): void;
};
type LinkOption = {
  id: string; // 必填参数,后台生成的linkid
  selector?: string; // 需要点击唤起的元素选择器（采用事件代理模式，不必等元素创建后绑定），示例 '#idxx,#idxxx',参考文档https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors
  data?: { [key: string]: string; }; // 自定义参数例如{a:1,b:2} 换起应用时会携带过去并映射成a=1&b=2
  proxyOpenDownload?: IProxyOpenDownload; // 自定义打开下载提示行为
  timeout?: number; // 触发弹窗等待超时时间单位毫秒，默认200毫秒，安卓中微信强制为0
  auto?: boolean; // 是否自动唤起,默认false,配置下发后不自动唤起应用(特别注意，部分web容器会限制自动唤起)
  lazy?: boolean; // 是否将配置下发延迟到点击时下发，默认false，如果需延迟到点击时下发配置应设置为true
  useOpenInBrowerTips?: string | ProxyOpenInBrowerTips; // 是否在微信和qq中使在浏览器中打开的提示，当值为string类型时，默认'default',此时会打开默认蒙版样式；值为function时，需要该函数返回蒙层html片段。
  useLoading?: string | [ProxyShowLoading, ProxySHideLoading]; //即将支持 当值为string类型时，默认'default',启用自带loading,当值为数值时，数组第一个函数触发唤起时触发，第二个函数关闭loading时触发
  onready?: ReadyCallback; // 配置下发后触发
};
declare class ulink {
  /**
   * ulink新版初始化函数
   * @param option 初始化参数
   */
  constructor(option: LinkOption);
  /**
   * ulink新版多参数初始化函数
   * @param options 多个linkid初始化参数
   */
  constructor(options: Array<LinkOption>);
}
export as namespace ULink;
export = ulink;
