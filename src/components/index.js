
/**
 * Created by jhonyoung on 2017/10/29.
 * 组件导入，导出，按照业务功能区分
 */

import FAQs from '../components/FAQs/FAQs.jsx';
import AboutUs from '../components/aboutUs/AboutUs.jsx';
import InputOrder from '../components/inputOrder/inputOrder.jsx';
import LoanAudit from '../components/loanAudit/loanAudit.jsx';

import LoanAuditDetails from '../components/loanAudit/loanAuditDetails.jsx';
LoanAuditDetails.routerName = "loanauditdetails/:id" //所有详情页重新指派路由添加id等

export default {
  FAQs,
  AboutUs,
  InputOrder,
  LoanAudit,
  LoanAuditDetails
}