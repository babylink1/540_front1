import { Row, Col } from "react-bootstrap";
import { Modal } from "antd";
import PageContainer from "../../components/PageContainer";
import CustomCalendar from './modules/cusCalendar';
import ActionBox from './modules/actionBox'
import CurSchedule from './modules/curSchedule'

import "moment/locale/en-gb"; // 设置语言为英文
import moment from "moment-timezone";
import { useState, useEffect } from "react";

function MonthlyReportsPage() {

    const [selectWeeks, setSelectWeeks] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOk = () => { }

    const renderWeekRange = () => {
        let format = 'D/M/YYYY'
        if (selectWeeks && selectWeeks.length > 0) {
            return <>
                {moment(selectWeeks[0]).format(format)} - {moment(selectWeeks[6]).format(format)}
            </>
        }
    }

    useEffect(() => {

    }, [])

    return <PageContainer pageName="Monthly Reports">
        <Row>
            <Col>
                <CustomCalendar onWeekSelected={(weeks) => setSelectWeeks(weeks)} />
            </Col>
            <Col>
                <ActionBox selectWeeks={selectWeeks} onViewSchedule={() => setIsModalOpen(true)} />
            </Col>
        </Row>

        <CurSchedule visible={isModalOpen} onCancel={() => setIsModalOpen(false)} selectWeeks={selectWeeks} />
    </PageContainer>
}
export default MonthlyReportsPage;