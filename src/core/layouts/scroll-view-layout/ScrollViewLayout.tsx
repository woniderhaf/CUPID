import React, { useMemo } from 'react';
import { View, ScrollView, ScrollViewProps } from 'react-native';

import styles from './styles';

interface ScrollViewLayoutProps extends ScrollViewProps {
    children: React.ReactNode;
    disableHorizontalIndent?: boolean;
    disableTopIndent?: boolean;
    disableBottomIndent?: boolean;
    bounces?: boolean;
}

const ScrollViewLayout = (props: ScrollViewLayoutProps) => {
    const { children, disableHorizontalIndent, disableBottomIndent, disableTopIndent, bounces, ...otherProps } = props;

    const contentContainerStyle = useMemo(() => {
        return [
            styles.scrollView,
            {
                paddingHorizontal: disableHorizontalIndent ? 0 : 16,
                paddingBottom: disableBottomIndent ? 0 : styles.scrollView.paddingBottom
            }
        ];
    }, [disableHorizontalIndent, disableBottomIndent]);

    const contentStyle = useMemo(() => {
        return [styles.content, { paddingTop: disableTopIndent ? 0 : styles.content.paddingTop }];
    }, [disableTopIndent]);

    const scrollViewParams = useMemo(() => {
        const params: ScrollViewProps = {
            keyboardShouldPersistTaps: 'handled',
            contentInsetAdjustmentBehavior: 'always',
            keyboardDismissMode: 'interactive',
            automaticallyAdjustContentInsets: true,
            contentContainerStyle
        };

        if (typeof bounces !== 'undefined') {
            params.bounces = bounces;
        }

        return params;
    }, [contentContainerStyle, bounces]);

    return (
        <ScrollView {...otherProps} {...scrollViewParams}>
            <View style={contentStyle}>{children}</View>
        </ScrollView>
    );
};

export default ScrollViewLayout;
