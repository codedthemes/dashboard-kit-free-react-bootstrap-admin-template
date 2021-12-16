import React from 'react';

// react-bootstrap
import { Row, Col } from 'react-bootstrap';

// project imports
import SubscribeCard from 'components/Widgets/Statistic/SubscribeCard';
import StatisticBlink from 'components/Widgets/Statistic/StatisticBlink';
import NotificationCard from 'components/Widgets/Statistic/NotificationCard';
import OrderCard from 'components/Widgets/Statistic/OrderCard';
import OrderVisitorCard from 'components/Widgets/Statistic/OrderVisitorCard';

// -----------------------|| COMMON CONTENT ||-----------------------//
const CommonContent = () => (
    <>
        <Row>
            {/* SubscribeCard start */}
            <Col lg={4} md={12}>
                <SubscribeCard
                    params={{
                        iconClass: 'icon-mail',
                        primaryText: '8.62k',
                        primarySubText: 'Subscribers',
                        secondaryText: 'Your main list is growing',
                        buttonLabel: 'Manage List',
                        buttonUrl: '#',
                        variant: 'primary'
                    }}
                />
            </Col>
            <Col lg={4} md={12}>
                <SubscribeCard
                    params={{
                        iconClass: 'icon-twitter',
                        primaryText: '+40',
                        primarySubText: 'Followers',
                        secondaryText: 'Your main list is growing',
                        buttonLabel: 'Check them out',
                        buttonUrl: '#',
                        variant: 'success'
                    }}
                />
            </Col>
            <Col lg={4} md={12}>
                <SubscribeCard
                    params={{
                        iconClass: 'icon-briefcase',
                        primarySubText: 'Business Plan',
                        secondaryText: 'This is your current active plan',
                        buttonLabel: 'Upgrade to VIP',
                        buttonUrl: '#',
                        variant: 'danger'
                    }}
                />
            </Col>
            {/* SubscribeCard end */}

            {/* StatisticBlink start */}
            <Col lg={3} md={6}>
                <StatisticBlink
                    params={{
                        variant: 'primary',
                        valuenow: 56,
                        title: 'Articles',
                        primaryText: '56',
                        secondaryText: 'Total',
                        footerText: 'Darft: 22'
                    }}
                />
            </Col>
            <Col lg={3} md={6}>
                <StatisticBlink
                    params={{
                        variant: 'success',
                        valuenow: 14,
                        title: 'Categories',
                        primaryText: '14',
                        secondaryText: 'Total',
                        footerText: 'Used: 14'
                    }}
                />
            </Col>
            <Col lg={3} md={6}>
                <StatisticBlink
                    params={{
                        variant: 'danger',
                        valuenow: 85,
                        title: 'Tickets',
                        primaryText: '85',
                        secondaryText: 'Total',
                        footerText: 'Closed: 85'
                    }}
                />
            </Col>
            <Col lg={3} md={6}>
                <StatisticBlink
                    params={{
                        variant: 'warning',
                        valuenow: 42,
                        title: 'Forums',
                        primaryText: '42',
                        secondaryText: 'Total',
                        footerText: 'Unanswered: 42'
                    }}
                />
            </Col>
            {/* Statistic end */}

            {/* Order-visitor start */}
            <Col md={6} xl={3}>
                <OrderVisitorCard
                    params={{
                        variant: 'danger',
                        title: 'Order Status',
                        value: '7652',
                        subValue1: '48%',
                        subValue2: 'From Last 6 Months',
                        iconType: 'down'
                    }}
                />
            </Col>
            <Col md={6} xl={3}>
                <OrderVisitorCard
                    params={{
                        variant: 'success',
                        title: 'Order Status',
                        value: '6325',
                        subValue1: '36%',
                        subValue2: 'From Last 6 Months',
                        iconType: 'up'
                    }}
                />
            </Col>
            <Col md={6} xl={3}>
                <OrderVisitorCard
                    params={{
                        variant: 'primary',
                        title: 'Unique Visitors',
                        value: '652',
                        subValue1: '36%',
                        subValue2: 'From Last 6 Months',
                        iconType: 'up'
                    }}
                />
            </Col>
            <Col md={6} xl={3}>
                <OrderVisitorCard
                    params={{
                        variant: 'warning',
                        title: 'Monthly Earnings',
                        value: '5963',
                        subValue1: '36%',
                        subValue2: 'From Last 6 Months',
                        iconType: 'up'
                    }}
                />
            </Col>
            {/* Order-visitor end */}

            {/* Order  start */}
            <Col md={6} xl={4}>
                <OrderCard
                    params={{
                        variant: 'warning',
                        title: 'Revenue',
                        value: '$42,562',
                        subValue1: '$5,032',
                        subValueIcon1: 'up',
                        icon: 'filter'
                    }}
                />
            </Col>
            <Col md={6} xl={4}>
                <OrderCard
                    params={{
                        variant: 'primary',
                        title: 'Orders Received',
                        value: '486',
                        subValue1: '$5,032',
                        subValueIcon1: 'up',
                        subValue2: '$1,055',
                        subValueIcon2: 'down',
                        icon: 'users'
                    }}
                />
            </Col>
            <Col md={6} xl={4}>
                <OrderCard
                    params={{
                        variant: 'success',
                        title: 'Total Sales',
                        value: '1641',
                        subValue1: '$5,032',
                        subValueIcon1: 'down',
                        icon: 'radio'
                    }}
                />
            </Col>
            {/* Order  end */}
            {/* Notification  start */}
            <Col xl={3} md={6}>
                <NotificationCard
                    params={{
                        variant: 'primary',
                        iconClass: 'user-tie',
                        primaryText: '2,672',
                        secondaryText: 'Last week',
                        secondarySubText: 'users'
                    }}
                />
            </Col>
            <Col xl={3} md={6}>
                <NotificationCard
                    params={{
                        variant: 'success',
                        iconClass: 'wallet',
                        primaryText: '$6391',
                        secondaryText: 'Total',
                        secondarySubText: 'earning'
                    }}
                />
            </Col>
            <Col xl={3} md={6}>
                <NotificationCard
                    params={{
                        variant: 'danger',
                        iconClass: 'sitemap',
                        primaryText: '3,619',
                        secondaryText: 'New',
                        secondarySubText: 'order'
                    }}
                />
            </Col>
            <Col xl={3} md={6}>
                <NotificationCard
                    params={{
                        variant: 'warning',
                        iconClass: 'users',
                        primaryText: '9,276',
                        secondaryText: 'Today',
                        secondarySubText: 'visitors'
                    }}
                />
            </Col>
            {/* Notification  end */}
        </Row>
    </>
);

export default CommonContent;
