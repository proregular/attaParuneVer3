package com.green.attaparunever2.common;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Constants {
    private static int default_page_size;

    @Value("${const.default-page-size}")
    public void setDefaultPageSize(int value) {
        default_page_size = value;
    }

    public static int getDefault_page_size() {
        return default_page_size;
    }
}
