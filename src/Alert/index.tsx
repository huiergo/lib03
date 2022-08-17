// 源文件
import React,{PropsWithChildren} from 'react';
import t from 'prop-types'

export interface AlertProps{
   /**
    * @description Alert 的类型
    * @default 'info'
    */
    kind?:'info'|'positive'|'negative'|'warning'
}

export type KindMap = Record<Required<AlertProps>['kind'],string>
const prefixCls='happy-alert'

const kinds:KindMap={
    info: "red",
    positive: "green",
    negative: "blue",
    warning: "purple"
}

const Alert: React.FC<PropsWithChildren<AlertProps>>=({children, kind="info",...rest})=>(
    <div
        className={prefixCls}
        style={{background:kinds[kind]}}
        {...rest}
    >
        {children}
    </div>
)

Alert.propTypes={
    kind:t.oneOf(['info','positive','negative','warning'])
}

export default Alert