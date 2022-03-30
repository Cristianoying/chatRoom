@api
@api {method} path [title]
@api {get} /mission/add 添加任务
HTTP接口调用方法、路径及名称

@apiVersion
@apiVersion version
@apiVersion 1.0.0
api版本

@apiName
@apiName name
@apiName addMission
api 名称

@apiGroup
@apiGroup name
@apiGroup Mission
api 分组

@apiParam
@apiParam [(group)] [{type}] [field=defaultValue] [description]
@apiParam {String} date 添加时间
请求参数

@apiSuccess
@apiSuccess [(group)] [{type}] field [description]
@apiSuccess {Number} code 结果标识
返回数据描述

@apiError
@apiError [(group)] [{type}] field [description]
接口失败描述

@apiSuccessExample
@apiSuccessExample [{type}] [title] example
@apiSuccessExample Success-Response:{}
接口成功返回样例