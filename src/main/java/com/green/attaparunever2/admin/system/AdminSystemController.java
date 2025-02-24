package com.green.attaparunever2.admin.system;

import com.green.attaparunever2.admin.AdminService;
import com.green.attaparunever2.admin.model.InsAnnouncementReq;
import com.green.attaparunever2.admin.model.InsSystemInquiryReq;
import com.green.attaparunever2.admin.model.SelOneSystemPostRes;
import com.green.attaparunever2.admin.model.SelRefundRes;
import com.green.attaparunever2.common.model.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("admin/system")
@Tag(name="관리자 시스템", description = "관리자 시스템 관련 API")
public class AdminSystemController {
    private final AdminService adminService;

    @GetMapping("v3/post")
    @Operation(summary = "게시글 자세히 보기")
    public ResultResponse<SelOneSystemPostRes> getSelOneSystemPost(@ParameterObject @ModelAttribute long inquiryId){
        SelOneSystemPostRes res = adminService.getOneSystemPost(inquiryId);

        return ResultResponse.<SelOneSystemPostRes>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("게시글 자세히 보기 완료")
                .resultData(res)
                .build();

    }

    @PostMapping("v3/announcement")
    @Operation(summary = "공지사항 등록하기")
    public ResultResponse<Integer> postSystemPost(@RequestPart(required = false) MultipartFile pic
            , @RequestPart InsAnnouncementReq req){
        int result = adminService.postAnnouncement(pic, req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("공지사항 등록완료")
                .resultData(result)
                .build();
    }

    @PostMapping("v3/post")
    @Operation(summary = "게시글 등록하기")
    public ResultResponse<Integer> postSystemPost(@RequestPart(required = false) MultipartFile pic
            , @RequestPart InsSystemInquiryReq req){
        int result = adminService.postSystemPost(pic, req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("게시글 등록완료")
                .resultData(result)
                .build();
    }

    @GetMapping("v3/Refund")
    @Operation(summary = "환불 내역 조회")
    public ResultResponse<List<SelRefundRes>> getRefund(){
        List<SelRefundRes> res = adminService.getRefund();

        return ResultResponse.<List<SelRefundRes>>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("환불 내역 조회 완료")
                .resultData(res)
                .build();
    }
}
